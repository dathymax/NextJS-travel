export const metadata = {
    title: 'Account setting',
    description: 'Account setting',
}

export default function AccountSettingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section>
    )
}
