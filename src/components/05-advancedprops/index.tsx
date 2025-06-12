// Sometimes you want different prop combinations based on a condition.
// Union Types (Either/Or):

type BasicProps = {
    type: 'basic';
    name: string;

}

type AdvancedProps = {
    type: 'advanced';
    name: string;
    email: string;
}

type ProfileProps = BasicProps | AdvancedProps;

function Profile (props: ProfileProps) {
    if (props.type === 'basic') {
        return <div className="advanced">Basic: {props.name}</div>;
    }
    return <div>Advanced: {props.name} - {props.email}</div>;
}
export default Profile;