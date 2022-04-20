// fires the event change (e) when enter is pressed (onSubmit)
// otherwise it would change after each letter is typed

export const UsernameForm = ({ submitHandler, setUser }) => {
    return (
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setUser(e.target.value)} />
        </form>
    );
};
