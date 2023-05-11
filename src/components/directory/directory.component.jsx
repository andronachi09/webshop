import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({gheorghe}) => {
    return(
        <div className="directory-container">
            {gheorghe.map((category) => (
                <CategoryItem key={category.id} vasea={category} />
            ))}
        </div>
    )
}

export default Directory;