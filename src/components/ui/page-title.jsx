export default function PageTitle({ title }) {
    return (
        <div className="inline-block overflow-hidden">
            <h1 className="text-6xl font-bold text-left title-pan-in">
                {title}
            </h1>
        </div>
    );
}