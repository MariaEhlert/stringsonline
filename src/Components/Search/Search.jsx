import { useEffect, useState } from 'react'
import appService from '../../AppServices/AppService';
import './Search.scss'
export const Search = () => {
    // const [searchData, setSearchData] = useState([]);
    // useEffect(() => {
    //     const getSearch = async () => {
    //         try {
    //             const respones = await appService.getList('search');
    //             if (respones.data) {
    //                 setSearchData(respones.items)
    //                 console.log();
    //             };
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    // })
    return(
        <div className='searchWrapper'>
            <input type="text" placeholder='Indtast søgeord' />
            <button><span className="material-symbols-outlined">arrow_forward</span></button>
        </div>
    )
}