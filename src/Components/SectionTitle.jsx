/* eslint-disable react/prop-types */
const SectionTitle = ({title}) => {
    return (
        <div className="md:pt-6 py-10">
            <h1 className="text-2xl xl:text-4xl font-semibold">{title}</h1>
        </div>
    );
};

export default SectionTitle;