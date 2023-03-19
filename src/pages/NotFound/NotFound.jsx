import { NotFoundTitle, BackLink } from './NotFound.styled';

export default function NotFound() {
    return (
        <div>
            <BackLink to={"/"}>Back to Home</BackLink>
            <NotFoundTitle>Page not found</NotFoundTitle>
        </div>
    )
}