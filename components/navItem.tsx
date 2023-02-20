const NavItem: React.FC<{ item: string }> = (props) => {
    const item = props.item
    return (
        <a href="#" className="hover:text-softOrange">
            {item}
        </a>
    );
};

export default NavItem;