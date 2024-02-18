
export const Hero = () => {

    return (
        <>
            <section className="flex">
                <div>
                    <h1 
                        className="text-2xl font-400 text-violet-500 text-center mb-4 sm:text-5xl sm:font-bold"
                    >Centro IMI de Zalla
                    </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, deleniti voluptatum quaerat fuga soluta a quas sint vitae dolores quibusdam amet dignissimos nostrum, ut incidunt quos, architecto doloribus! Quis, asperiores.</p>
                </div>

                <div className="container flex w-24 h-24 bg-red-500 shadow rounded"></div>

                <Boton />
            </section>

            <section className="flex">
                <div>
                    <h1 className="text-2xl font-400 text-violet-500 text-center sm:text-5xl sm:font-bold">Centro IMI de Zalla</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, deleniti voluptatum quaerat fuga soluta a quas sint vitae dolores quibusdam amet dignissimos nostrum, ut incidunt quos, architecto doloribus! Quis, asperiores.</p>
                </div>

                <div className="container flex w-24 h-24 bg-red-500 shadow rounded-"></div>

                <Boton />
            </section>
        </>
    )
}

const Boton = () => {

    return (
        <button>Click aquí</button>
    )
}
