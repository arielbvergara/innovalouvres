export default function pagePage({
    pageComponentProps
}) {
    return (
        <PageComponent {...pageComponentProps}>
            <pagePageComponent
            />
        </PageComponent>
    )
}

export async function getServerSideProps(ctx) {
    return {
        props: {
            pageComponentProps
        }
    }
}