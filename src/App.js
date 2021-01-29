import React, {useState, useEffect}  from 'react'
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import ComponenteEsterno from './ComponenteEsterno'

//const onInputTextChange = (event) => setInputText(event.target.value)
//const response = await fetch(`${ALLLJOKESBYKEYWORD}${inputText}`)

const ALLCATEGORIESURL = 'https://api.chucknorris.io/jokes/categories'
const RANDOMJOKEBYCATURL = 'https://api.chucknorris.io/jokes/random?category=' // remember to fill this
const ALLLJOKESBYKEYWORD = 'https://api.chucknorris.io/jokes/search?query=' // remember to fill this + PAROLA CHIAVE CHE ABBIAMO DIGITATO NELL'INPUT ED è SALVATO NELLA VARIABILE DI STATE
const launchErrorAlert = () => setTimeout(() => window.alert('errore!'), 500) 

// classe 'App-logo-spinning' durante il caricamento, altrimenti classe 'App-logo'
const Logo = ({ loading }) => {
  return (
    <img
      src={logo}
      //condizione if else
      className={`App-logo${loading ? ' App-logo-spinning' : ''}`}
      alt='interactive-logo'
       
    />
  )
}

const CategoryButton = ({ title, onClick }) => {
  return (
    <div>
        <button className="Cat-button" onClick={onClick} id={title}>
    <code>{title}</code>
  </button>

    </div>
  )
  //null

  
  
}


const CategoriesList = ({ categories, onCategoryClick }) => {
  return (
<div>
      {categories.map((category, index) => 

          <CategoryButton
          key={`tag-${index}`}
          title={category}
          onClick={onCategoryClick}
          />

      )}
  </div>

  )

  // null per ciascun elemento di 'categories' renderizzare il componente <CategoryButton />
  
}

const Joke = ({ value, categories }) => {
  return 
  <div className="Joke">
      <code className="Joke-Value">{categories}</code><br/>
      <span className={`Dont-View-Cat${categories === "" ? "Selected-Cat" : "" }`} >
         <code >{value}</code>
       </span>
      </div>
}

function App() {
  
  const [testoInput, setTestoInput] = useState('')
  const [fetchedJoke, setFetchedJoke] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')


  const launchErrorAlert = (errorX) => {
    console.log("launchErrorAlert")
    if (errorX === true) { 
      (testoInput === "") ? alert("Inserisci qualcos'alto!") : alert("la ricerca non ha trovato nulla")
      setTestoInput("")
    }
  }


  
  const getRandomJokeByCat= async () => {
    
    let quote = {}
    let errorX = false
    let url =""


    try {
      setLoading(true)
     
      url = `${RANDOMJOKEBYCATURL}${selectedCategory}`
      console.log(url)
      
      const response = await fetch(url)
      let data = await response.json()
     
      if (data.error) throw new Error(data.error)

      quote = {...data}

    } catch (err) {

      errorX = true
      console.log("L'errore dice: " , err)

    } finally {

      
      setLoading(false)
      
      setError(errorX)

      if (errorX === true){
        console.log("errorX dentro")
        launchErrorAlert(errorX)
      } else {
        console.log("setFetchedJoke")
        setFetchedJoke(quote.value)
      }

    }
  }

 
  
  const onCategoryClick = (event) => {

    setTestoInput(event.currentTarget.id )
    setFetchedJoke("")
    setSelectedCategory(event.currentTarget.id)

  }


  
  const getAllCategories = async () => {
    
    let quote = {}
    let errorX = false
    var categ=[]

    try {
      setLoading(true)
     
      
      const response = await fetch(ALLCATEGORIESURL)
      let data = await response.json()
      
      if (data.error) throw new Error(data.error)

      quote = {...data}

    } catch (err) {

      errorX = true
      console.log("L'errore dice: " , err)

    } finally {

      
      setLoading(false)
      
      setError(errorX)

      if (errorX === true){
        console.log("url delle categorie errato")
        
      } else {
        
        for (var cat in quote){
         categ.push(quote[cat]);
        }
        console.log(Array.isArray(categ))
        setCategories(categ)

      }
    }
  }

// const backgroundChange = (event) => {



// }


  
  const getJokeByKeyword = async () => {

    let quote = {}
    let errorX = false
    let url =""

    

    try {
      setLoading(true)
     
      url = `${ALLLJOKESBYKEYWORD}${testoInput}`

      const response = await fetch(url)
      let data = await response.json()
      
      if (data.error) throw new Error(data.error)

      quote = {...data.result}
      
      console.log(quote)
      console.log(data.result)
      console.log(quote[0].value)

    } catch (err) {

      errorX = true
      console.log("L'errore dice: " , err)

    } finally {

      
      setLoading(false)
      
      setError(errorX)

      if (errorX === true){
        console.log("errorX dentro")
        launchErrorAlert(errorX)
      } else {
        setFetchedJoke(quote[0].value)
      }

    }
  }


  
  const onInputTextChange= (event) => {
    setTestoInput(event.target.value)
    console.log(event.target.value)
    setFetchedJoke("")
  }

  
  useEffect(() => {
    getAllCategories()
  }, [])
  

    return (
      <div className="App">
        <div className="App-header">
        {/* <button
            className="Layout-Button"           
            onClick={backgroundChange}
          >
          <code>CAMBIA BACKGROUND!</code>

          </button> */}
          <ComponenteEsterno />
          <Logo
            loading={loading}
          />

          <input
            type="search"
            id="search"
            name="search"
            placeholder="Inserisci qui..."
            value={testoInput}
            onChange={onInputTextChange}
          />
    
          <button
            className="Search-Button"           
            onClick={getJokeByKeyword}
          >
          <code>CLICK TO SEARCH!</code>

          </button>
          <code>or: </code>
          <CategoriesList
             categories={categories}
             onCategoryClick={onCategoryClick}
          />
        </div>

        <div className="Content">
          <img
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" 
            className="Chuck-Logo"
            alt="chuck-logo"
          />

          <code>
          { !error && (
            <h2>
              SELECTED CATEGORY:
              <span className="Selected-Cat">
              {testoInput}
              </span>
            </h2>
          )}
          </code>

          <button
            className="Random-Button"
            onClick={getRandomJokeByCat}
          >
            <h2>GET RANDOM JOKE FOR SELECTED CATEGORY</h2>
          </button>

         

          {testoInput !== "" && (
          <Joke
            value={fetchedJoke}
            categories={testoInput}
          />
          )}

        </div>
        <div className="footer">
        <code>Esame di React per cfp-futura. Grazie ad <a href="https://api.chucknorris.io">api.chucknorris.io</a> per l'immagine e le api. Docente: Vito Vitale. Studente: Domenico Mucci</code>
        </div>
      </div>
    );

};

export default App;



 