import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { CardItem } from '../models/types/CardITem'
import { date_to_string } from '../lib/date_to_string'

interface CustomCardProps {
    item: CardItem
}

const CustomCard = (props: CustomCardProps) => {
  return (
    <div className='rounded-lg w-full flex flex-col bg-white gap-6 shadow-md border-2 border-gray-500/10'>
        <div className='flex items-center justify-between bg-gray-500/10 text-center rounded-md px-6 h-14'>
            <span className='text-lg font-bold'>{props.item.name}</span>
            <div className='flex items-center gap-8'>
                <span className='text-xs flex-2 font-medium italic'>Référence: {props.item.reference}</span>
                <div className='flex flex-2 items-center text-center gap-1'>
                    <Image src='/calendar_month.svg' alt='archive' width={20} height={20}  />
                    <span className='text-xs font-medium italic'>Date de la demande : {date_to_string(new Date(props.item.request_date)) }</span>
                </div>
                <div className={`px-4 py-1 rounded-lg border-2 ${props.item.status === 'complet' ? 'border-green-600 bg-green-300/20 text-green-600' : props.item.status === 'incomplet' ? 'border-yellow-600 bg-yellow-300/20 text-yellow-600' : 'border-red-600 bg-red-300/20 text-red-600'} text-center flex items-center`}>
                    <span className='text-sm uppercase font-semibold'>{props.item.status}</span>
                </div>
            </div>
        </div>
        <div className={`flex justify-between px-6`}>
            <div className='flex flex-col gap-2'>
                <span className='text-base font-bold'> A propos du locataire </span>
                <div className='flex gap-1'>
                    <Image src='/mail.svg' alt='archive' width={20} height={20}  />
                    <span className='text-sm font-medium'>{props.item.tenant.email}</span>
                </div>
                <div className='flex gap-1'>
                    <Image src='/call.svg' alt='archive' width={20} height={20}  />
                    <span className='text-sm font-medium'>{props.item.tenant.phone}</span>
                </div>
                <div className='flex gap-1'>
                    <Image src='/account_circle.svg' alt='archive' width={20} height={20}  />
                    <span className='text-sm font-medium'>{props.item.tenant.guarantor_type}</span>
                </div>
                <div className='flex gap-1'>
                    <Image src='/manage_accounts.svg' alt='archive' width={20} height={20}  />
                    <span className='text-sm font-medium uppercase'>{props.item.tenant.pro_status}</span>
                </div>

            </div>
            {props.item.guarantor && <div className='flex flex-col gap-2'>
                <span className='text-base font-bold'> A propos du garant </span>
                <div className='flex gap-1'>
                    <Image src='/mail.svg' alt='archive' width={20} height={20}  />
                    <span className='text-sm font-medium'>{props.item.guarantor?.email ?? ''}</span>
                </div>
                <div className='flex gap-1'>
                    <Image src='/call.svg' alt='archive' width={20} height={20}  />
                    <span className='text-sm font-medium'>+{props.item.guarantor?.phone ?? ''}</span>
                </div>
                <div className='flex gap-1'>
                    <Image src='/manage_accounts.svg' alt='archive' width={20} height={20}  />
                    <span className='text-sm font-medium uppercase'>{props.item.guarantor?.pro_status ?? ''}</span>
                </div>
            </div>}
            {
                props.item.validated && <div className='flex items-start'>
                <Image src='/validate_icon.jpg' alt='validate_icon' width={150} height={150}  />
            </div>
            }
        </div>
        <div className='flex justify-between items-center px-6 pb-4'>
            <Button title='Archiver' icon='/inventory.svg' onClick={() => {console.log('Archiver');}} />
            <Button title='vérifier le dossier' icon='/approval_delegation.svg' onClick={() => {console.log('Archiver');}} />
            <Button title='Télécharger' icon='/download.svg' onClick={() => {console.log('Archiver');}} />
            <Button title='Visualiser' icon='/visibility.svg' onClick={() => {console.log('Archiver');}} />
        </div>
    </div>
  )
}

export default CustomCard