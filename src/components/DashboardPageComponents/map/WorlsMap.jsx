import React, { useEffect } from 'react';
import echarts from 'echarts';

const MyChart = () => {
  useEffect(() => {
    const dom = document.getElementById('chart-container');
    const myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    const app = {};
    const ROOT_PATH = 'https://echarts.apache.org/examples';

    let option;

    let dataCount = 0;
    const CHUNK_COUNT = 230;

    function fetchData(idx) {
      if (idx >= CHUNK_COUNT) {
        return;
      }
      const dataURL = `${ROOT_PATH}/data/asset/data/gps/gps_${idx}.bin`;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', dataURL, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = function (e) {
        const rawData = new Int32Array(this.response);
        const data = new Float32Array(rawData.length);
        const addedDataCount = rawData.length / 2;
        for (let i = 0; i < rawData.length; i += 2) {
          data[i] = rawData[i + 1] / 1e7;
          data[i + 1] = rawData[i] / 1e7;
        }
        myChart.appendData({
          seriesIndex: 0,
          data: data
        });
        fetchData(idx + 1);
      };
      xhr.send();
    }

    option = {
      backgroundColor: '#000',
      title: {
        text: '10000000 GPS Points',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: 'world',
        roam: true,
        label: {
          emphasis: {
            show: false
          }
        },
        silent: true,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#111'
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      },
      series: [
        {
          name: '弱',
          type: 'scatterGL',
          progressive: 1e6,
          coordinateSystem: 'geo',
          symbolSize: 1,
          zoomScale: 0.002,
          blendMode: 'lighter',
          large: true,
          itemStyle: {
            color: 'rgb(20, 15, 2)'
          },
          postEffect: {
            enable: true
          },
          silent: true,
          dimensions: ['lng', 'lat'],
          data: new Float32Array()
        }
      ]
    };

    fetchData(0);

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', myChart.resize);
      myChart.dispose();
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return <div id="chart-container" style={{ width: '100%', height: '400px' }}></div>;
};

export default MyChart;
