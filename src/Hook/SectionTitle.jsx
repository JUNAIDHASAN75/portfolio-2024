

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-left">
            <h2 className="text-3xl font-bold uppercase">{heading}</h2>
            <p className=" text-slate-600 uppercase tracking-widest mb-12">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;