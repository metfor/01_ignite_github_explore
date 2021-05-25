export function RepositoryItem(props) {
    return (
        
        <li>
            <strong>{props.repository?.name ?? "Defaut"}</strong>
            <p>{props.repository?.description ?? "Sem Descrição"}</p>
            <a href={props.repository?.html_url?? "#"}>
                Acessar repositório
                    </a>
        </li>
    )
}