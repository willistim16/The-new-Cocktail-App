import '/src/Components/SearchTile/SearchTile.css'

// eslint-disable-next-line react/prop-types
function SearchTile({imageUrl, title, link}) {


    return (
        <>
        <div className="searchPageTile">
            <div className="FoldOutMenu">
                <img src={imageUrl} alt={name}/>
                <details>
                    <summary>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <h3>
                                {title}
                            </h3>
                        </a>
                    </summary>
                    {/*<div className="searchOptions">*/}
                    {/*        {content}*/}
                    {/*    </div>*/}
                </details>
            </div>
        </div>
        </>
    )
}

export default SearchTile
