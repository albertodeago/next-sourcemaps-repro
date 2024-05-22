import { GetServerSideProps } from "next"
import Link from "next/link"
import { ReactElement } from "react";

const DynamicRouteLevel1 = ({ id }: { id: string }) => {

    return (
        <div>
            <h1>DynamicRouteLevel1</h1>
            <p>ID: {id}</p>
            <Link href="/content/dynamic-123/sub-dynamic-123">Go to sub-dynamic-page</Link><br />
            <Link href="/">Go home</Link><br />
        </div>
    )
}


DynamicRouteLevel1.getLayout = function getLayout(page: ReactElement) {
    return (
    <section> 
    <aside>Navigation</aside>
    <main>
        {page}
    </main>
    </section>)
};

export default DynamicRouteLevel1;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            id: context.params?.subject ?? '1'
        }
    }
}