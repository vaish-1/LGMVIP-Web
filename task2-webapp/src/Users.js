import React, { useState } from 'react'
import User from './User';


export function Users() {

    // var users=[];
    const [user, setUser] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);

    const getData = async () => {
        setShowSpinner(true);
        var res = await fetchUrl("https://reqres.in/api/users?page=1");

        setUser(pre => [...res.data]);
        // export {users};
    }

    async function fetchUrl(url) {
        var res = await fetch(url);

        res = await res.json();


        return res;
    }

    return (
        <div className='bg-[#E9D5DA] min-h-screen'>

            <header>
                    <div className="bg-[#937DC2] flex justify-between px-20 py-4">
                        <h2 className='py-2 text-white text-6xl compName'>LetsGrowMore</h2>
                    <button onClick={() => getData()} className="bg-[#C689C6] rounded-lg text-2xl h-16 p-4 text-white" > Get User</button>
                    </div>
            </header>



            {user && user.length > 0 ?

                <div className="flex flex-wrap justify-center w-md mt-24">
                    {/* <h2>Team</h2> */}
                    {user.map(user => {

                        return (
                            <User key={user.id} avatar={user.avatar} name={user.first_name + " " + user.last_name} email={user.email} about={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."} />
                        )

                    })} </div> :
                (<>
                    
                    {showSpinner ?

                        <div class="spinner-border loader middle" style={{ marginTop: "25rem" }} role="status">
                            <span class="sr-only"></span>
                        </div>



                        : null}

                </>)


            }

        </div>
    )
}