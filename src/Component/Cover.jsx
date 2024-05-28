

const Cover = ({ img, title, subTitle }) => {
    return (
        <div>
            <div className="hero h-[50vh]">
                <img className="h-[50vh] w-full" src={img} alt="" />
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;