const NavItem: React.FC<{ item: string }> = (props) => {
    const item = props.item
    return (
        <a>
            {item}
        </a>
    );
};

export default NavItem;