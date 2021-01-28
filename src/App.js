import React from 'react'
import logo from './logo.svg';
import './App.css';
import Main from './Main';

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
      alt='interactive-logo'
      // ... 
    />
  )
}

const CategoryButton = ({ title, onClick }) => {
  return null
  // <button className="Cat-button" ... >
  //   <code>{title}</code>
  // </button>
}


const CategoriesList = ({ categories, onCategoryClick }) => {
  return <CategoryButton />
  // null per ciascun elemento di 'categories' renderizzare il componente <CategoryButton />
}

const Joke = ({ value, categories }) => {
  return 
  <div className="Joke">
    <code className="Joke-Value">{value}</code>
      per ciascun elemento di 'categories', renderizzare:
      <span className="Selected-Cat" /*...*/ >
        <code>{/* QUI LA STRINGA DELLA SINGOLA CATEGORIA */}</code>
      </span>
  </div>
}
// const onInputTextChange = (event) => setInputText(event.target.value)
// const response = await fetch(`${ALLLJOKESBYKEYWORD}${inputText}`)
// const response = await fetch(`${ALLLJOKESBYKEYWORD}${this.state.inputText}`)



 class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      on:false
    }
  }

  boxClick = (e) => {
    this.setState({
      bgColor: "green"
    })
  }

  toggle =()=> {
    this.setState({
      on: !this.state.on
    })
  }

  onInputTextChange = (event) => this.setState({ inputText: event.target.value })

  
 
  // constructor() {
  //   super()
  //   this.state = {
  //     loading: false,
  //     error: false,
  //     categories: [],
  //     selectedCategory: '',
  //     fetchedJoke: {},
  //     inputText: '',
  //     storedQuotes: ((JSON.parse(localStorage.getItem('trumpQuotes'))) !== null 
  //     ? (JSON.parse(localStorage.getItem('trumpQuotes'))) 
  //     : []),
  //     storedTags: ((JSON.parse(localStorage.getItem('trumpQuotesTags'))) !== null 
  //     ? (JSON.parse(localStorage.getItem('trumpQuotesTags'))) : []),
  //     selectedTag: '',
  //     isListMode: false
  //   }
  // }

  // fetchAndSaveRandomTrump = async () => {
  //   let quote = {}
  //   let error = false
  //   const storedQuotes = this.state.storedQuotes
  //   let storedTags = this.state.storedTags
  //   // see inside quote.tags.forEach
  //   // let storedTags = [...this.state.storedTags]
  //   let isNewQuote = true

  //   try {
  //     this.setState({ loading: true })
  //     let response = await fetch(RANDOMURL)
  //     let data = await response.json()
  //     // console.log('NEL TRY DATA: ', data)
  //     // promise is still resolved even if no quotes got fetched (example: wrong url)
  //     // need to handle this situation manually
  //     // throw new Error blocks the execution, and jumps directly into 'CATCH'
  //     if (data.error) throw new Error(data.error)

  //     quote = {...data}

  //     // checking stored quotes
  //     // avoid condition if array is empty
  //     if (storedQuotes.length > 0) {
  //       // check if quote already exists
  //       const indexQuote = storedQuotes.findIndex(storedQuote => quote.quote_id === storedQuote.quote_id)
  //       if (indexQuote > -1 ) { // this means that quote already exists!
  //         isNewQuote = false
  //       }
  //     }

  //     // checking for each retrieved tag, if exists
  //     if (quote.tags.length > 0) {
  //       quote.tags.forEach(currentTag => {
  //         const indexTag = storedTags.findIndex(storedTag => storedTag === currentTag)
  //         if (indexTag === -1) {
  //           // mutable operation will lead to bugs here
  //           // storedTags.push(currentTag)
  //           storedTags = [...storedTags, currentTag]
  //         }
  //       })
  //     }
  //   } catch (err) {
  //     // console.log('SONO NEL CATCH: ', err)
  //     error = true
  //   } finally {
  //     // using setState with prevState
  //     // see https://css-tricks.com/understanding-react-setstate/
  //     this.setState((prevState) => {
  //       const quotesToSave = isNewQuote ? [...prevState.storedQuotes, quote] : prevState.storedQuotes
  //       // storing into localStorage
  //       localStorage.setItem('trumpQuotes', JSON.stringify(quotesToSave))
  //       localStorage.setItem('trumpQuotesTags', JSON.stringify(storedTags))
  //       return {
  //         ...this.state, // see immutables
  //         currentQuote: error ? {} : quote,
  //         loading: false,
  //         storedQuotes: [...quotesToSave],
  //         storedTags: [...storedTags],
  //         error
  //       }
  //     })
  //   }
  // }

//function App() {
  // qui tutto ciò che serve al componente per essere inizializzato

  // getAllCategories
  // funzione che deve recuperare l'array di tutte le categorie esistenti e salvarlo

  // onCategoryClick
  // funzione richiamata al click del componente CategoryButton

  // getRandomJokeByCat
  // funzione che recupera una singola barzelletta e la salva

  // getJokeByKeyword
  // funzione che recupera le barzellette contenenti la parola chiave
  // digitata nel campo di testo

  // onInputTextChange
  // handler per l'input di testo

  // qui i lifecycle methods

  render () {
    return (

  //     const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
  // const [categories, setCategories] = useState([])
  // const [selectedCategory, setSelectedCategory] = useState('')
  // const [fetchedJoke, setFetchedJoke] = useState({})
  // const [inputText, setInputText] = useState('')




      
      <div className="App">
        
        <div className="App-header">
          <Logo
            // ...
          />
          <input
            type="search" id="search" name="search" value={this.state.inputText} placeholder="Enter keyword here" onChange={this.onInputTextChange}
            
            //onChange={this.getValue}

            //da dove prendere il contenuto e passare una funzione che sia in grado di modificare il contenuto
            //value con variabile di state
            //handler
            /*<input type="search" id="search" name="search" value={inputText} placeholder="Enter keyword here" onChange={onInputTextChange} />*/
          />
          <button
            className="Search-Button"
            style={{backgroundColor: this.state.bgColor}}
           onClick={this.boxClick}
            // ...
            //onClick={this.handleSubmit}
          >
            <code>Background Verde</code>
          </button>
          <code>or: </code>
          <CategoriesList
            // ...
          />
        </div>
        <div className="Content" style={{backgroundColor: this.state.bgColor}}>
          <img
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" 
            className="Chuck-Logo"
            alt="chuck-logo"
          />
          <code>
            <h2>
              La categoria selezionata è:
              <span className="Selected-Cat">
                {/* QUI LA CATEGORIA SELEZIONATA */}
              </span>
            </h2>
          </code>
          <button
            className="Random-Button"
            style={{backgroundColor: this.state.bgColor}}
            onClick={this.toggle}
            // ...
          >
            <h2>Toggle text!</h2>
          </button>
          {/* <Joke ... /> */}
          <div>
            {this.state.on && <Main />}
            </div>
          
        </div>
        <div className="footer">
        <code>Esame di React per cfp-futura. Grazie ad <a href="https://api.chucknorris.io">api.chucknorris.io</a> per l'immagine e le api. Docente: Vito Vitale. Studente: Domenico Mucci </code>
        </div>
        
      </div>
    );
   }
};

export default App;
