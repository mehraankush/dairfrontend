import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TopCountryData } from '../../../../data/Country';

export const TopCountry = () => {
    const columns = [
        { field: 'country' },
        { field: 'visit' },
    ];
    return (
        <div className='text-black-alpha-70'>
            <div className='pb-2'>
                <p className='font-semibold text-lg'>Top 10 country</p>
            </div>
            <div>
                <div className='flex justify-content-between  bg-pink-100 p-1 border-round-sm mt-1'>
                    <p className='text-sm font-semibold p-1'>Country</p>
                    <p className='text-sm font-semibold p-1 mr-7'>Visit</p>
                </div>
                <DataTable value={TopCountryData} tableStyle={{ minWidth: '20rem',minHeight:'18rem' }}>
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} className='p-2 text-sm' />
                    ))}
                </DataTable>
            </div>
        </div>
    )
}
