import { useEffect, useState } from "react"
import { Link, NavLink, useParams } from "react-router-dom";
import appService from "../../../AppServices/AppService"
import { Brands } from "../../Brands/Brands";
import './SideNav.scss'

export const SideNav = () => {
    const { id } = useParams();
    const [groups, setGroups] = useState([]);
    const getGroups = async () => {
        try {
            //henter alt info igennem api ved hjælp af appService
            const respones = await appService.getList('');
            if (respones.data) {
                //henter alle produkt grupper
                setGroups(respones.data.productgroups.items)
            };
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getGroups();
    }, [])

    //sætter active på den produktgruppe som der bliver klikket på
    //og åbner derfor en liste til nextElementSibling (undergruppe)
    const handleSub = event => {
        event.currentTarget.classList.toggle('active');
        let subgroup = event.currentTarget.nextElementSibling;
        //sætter display block på nextElementSibling(undergruppe) hvis den er active
        //derfor får alle undergrupper hvor produkutgruppen ikke er active er display none 
        if (subgroup.style.display === 'block') {
            subgroup.style.display = 'none';
        } else {
            subgroup.style.display = 'block';
        }
    }
    return (
        <nav className="sideNav">
            <ul>
                {/*mapper over liste med alle produktgrupper */}
                {groups && groups.map((group) => {
                    return (
                        <ul key={group.id}>
                            {/* productgroups */}
                            <li onClick={handleSub}>
                                {group.title}
                            </li>
                            {/* nextElementSibling */}
                            <li className="subgroup">
                                {group && group.subgroups.map((productList) => {
                                    return (
                                        <ol key={productList.id}>
                                            {/* subgroups */}
                                            {/* sender id vider til productList og viser produkts liste med undergrupper */}
                                            <NavLink to={`/product/${productList.id}`}>{productList.title}</NavLink>
                                        </ol>
                                    )
                                })}
                            </li>
                        </ul>
                    )
                })}
                <Brands/>
            </ul>
        </nav>
    )
}