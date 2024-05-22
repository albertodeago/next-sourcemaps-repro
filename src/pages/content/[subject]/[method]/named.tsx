import { GetServerSideProps } from "next"
import Link from "next/link"
import { ReactElement } from "react";

const NamedPage = ({ id }: { id: string }) => {

    return (
        <div>
            <h1>NamedPage</h1>
            <p>ID: {id}</p>
            {/* <Link href="/content/dynamic-route-123/sub-dynamic-route-123/sub-sub-dynamic-route-123">Go to sub-sub-dynamic</Link><br /> */}
            <Link href="/">Go home</Link><br />
        </div>
    )
}


NamedPage.getLayout = function getLayout(page: ReactElement) {
    return (
    <section> 
    <aside>Navigation</aside>
    <main>
        {page}
    </main>
    </section>)
};

export default NamedPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            id: context.params?.method ?? '1'
        }
    }
}
