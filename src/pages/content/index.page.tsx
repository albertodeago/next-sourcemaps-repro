import { GetServerSideProps } from "next"
import Link from "next/link"
import { ReactElement } from "react";

const ContentPage = () => {
    return (
        <div>
            <h1>Content page</h1>
            <Link href={`/content/dynamic-123`}>Go to dynamic route</Link>
        </div>
    )
}


ContentPage.getLayout = function getLayout(page: ReactElement) {
    return (
    <section> 
    <aside>Navigation</aside>
    <main>
        {page}
    </main>
    </section>)
};

export default ContentPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
        }
    }
}