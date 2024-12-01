export default function TabButton({children, isSelected, ...props}){
    return <i><button
    className={isSelected ? 'active' : undefined}
     {...props}>{children}</button></i>
}