"use client"
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ArticleTableApi } from '@/services/api';
import Image from 'next/image';
import '@/Styles/Dashboard.scss'

export default function USerTable() {
    const [customers, setCustomers] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        articals();
    }, []);

    const articals = async () => {
        const res = await ArticleTableApi();
        // console.log(res)
        setCustomers(res);
    }

    return (
        <div className='bg-white text-black-alpha-70 p-5 flex flex-column justify-content-between gap-3'>
            <div>
                <p className='font-semibold text-xl'>Top stories in last 30 days</p>
            </div>

            <div className='flex gap-5 bg-pink-100 border-round-sm px-3'>
                <p className='text-xs font-semibold border-bottom-1 border-blue-700 p-1 cursor-pointer'>Letest Articles</p>
                <p className='text-xs font-semibold p-2 cursor-pointer'>Tranding Articles</p>
                <p className='text-xs font-semibold p-2 cursor-pointer'>Popular Articles</p>
            </div>

            <div className="card">
                <DataTable value={customers} paginator rows={5}  tableStyle={{ minWidth: '50rem',minHeight:'18rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                    >

                    <Column field="Title" header="Title" style={{ width: '25%' }} className='text-xs p-1 '></Column>

                    <Column field="StoryViews" header="StoryViews" style={{ width: '25%' }} className='text-sm p-1'></Column>

                    <Column field="PaywallClicks" header="PaywallClicks" style={{ width: '25%' }} className='text-sm p-1'></Column>

                    <Column field="PurchaseAmount" header="PurchaseAmount" style={{ width: '25%' }} className='text-sm p-1'></Column>
                    <Column field="Read" header="Read" style={{ width: '25%' }}>
                        <Image alt='Icon' width={40} height={40} src='/dashboard/read.svg'/>
                    </Column>   

                </DataTable>
            </div>
        </div>
    );
}
