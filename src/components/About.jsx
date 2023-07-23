export default function About({ imageSource = 'https://via.placeholder.com/215', aboutText}) {
    return(
        <aside>
            <img src={imageSource} alt="blog logo" />
            <p>{aboutText}</p>
        </aside>
    )
}