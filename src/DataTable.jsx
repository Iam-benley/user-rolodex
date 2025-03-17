export default function DataTable({users}){
    return (
        <>
            {
                users.map(user => 
                <li key={user.id}>
                    {user.name}
                </li>)
            }
        </>
    )
}