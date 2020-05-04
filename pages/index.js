import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../components/Layout'

export default () => {
    let { title, cats, galleryImages } = attributes;
    return (
        <Layout>
            <>
                <article>
                    <h1>{title}</h1>
                    <HomeContent />
                    <ul>
                        {cats.map((cat, k) => (
                            <li key={k}>
                                <h2>{cat.name}</h2>
                                <p>{cat.description}</p>
                            </li>
                        ))}
                    </ul>
                </article>
                {galleryImages.map((img, k) => (
                    <img key={k} src={img} />
                ))
                }
            </>
        </Layout>
    )
}