import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import '/src/Pages/MijnFavorieten/MijnFavorieten.css'
// import CocktailList from "../../Components/MijnFavorieten/CocktailList.jsx";
// import MyFavourites from "../../Components/MijnFavorieten/MyFavourites.jsx";

function MijnFavorieten() {

    return (
        <>
            <div className="favorietenPageHeader">
                <Header title="Favorieten" content="Al jouw favoriete cocktails op een rij. Click op de foto voor meer informatie over het bereiden, de ingredienten en meer!" />
            </div>
            <main>
                {/*<div>*/}
                {/*    <CocktailList addFavourite={addFavourite}/>*/}
                {/*    <FavouritesPage favourites={favourites} removeFavourite={removeFavourite}/>*/}
                {/*</div>*/}
            </main>
            <Footer/>
        </>
    )
}

export default MijnFavorieten