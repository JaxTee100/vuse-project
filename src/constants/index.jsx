import { MdOutlineChat, MdOutlineContacts, MdOutlineInsertChart, MdOutlineStorefront,  MdPeopleAlt } from "react-icons/md"
import { LuArrowUpDown } from "react-icons/lu";

export const stats = [
    {
        title: 'Sales',
        value: '106k',
        percentage: '+4.25%'
    },
    {
        title: 'New Users',
        value: '3214',
        percentage: '+2.25%'
    },
    {
        title: 'Traffic',
        value: '350k',
        percentage: '+4.75%'
    },
    {
        title: 'Performance',
        value: '78.67%',
        percentage: '+4.75%'
    },
]




export const statBox = [
    {
        title: 'Sales',
        value: '106k',
        percentage: '+4.25%',
        icon: <MdOutlineStorefront />,
        textColor: '#2195F1'
    },
    {
        title: 'New User',
        value: '3214',
        percentage: '+2.25%',
        icon: <MdPeopleAlt />,
        textColor: '#FF8F00'
    },
    {
        title: 'Traffic',
        value: '350K',
        percentage: '+4.75%',
        icon: <LuArrowUpDown />,
        textColor: '#F50057'
    },
    {
        title: 'Performance',
        value: '78.67%',
        percentage: '+4.75%',
        icon: <MdOutlineInsertChart />,
        textColor: '#00BAD2'
    },

]



const SidebarItems = [
    {
        subtitle: 'App',
        items: [
            {icon: <MdOutlineContacts />, subtext: 'Contacts'},
            {icon: <MdOutlineChat />, subtext: 'Chat'}
        ]
    }
]