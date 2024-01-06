
import Lines from './Lines'

const App = () => {
  const prepositions = ['1.1 Prepositions-I','Bi – with','Li – for','‘Ala – on','Min – from','Ila – to','Fi - in'];
  const ayah1 = [{word:"بِ", definition: prepositions , card: true},{word: "سْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", definition:[], card: false}]
  const ayah2 = [{word: "ٱلْ", definition:prepositions, card: true},{word: "حَمْدُ", definition:[], card: false},{word: "لِ", definition:prepositions, card: true},{word: "لِلَّهِ رَبِّ ٱلْ", definition:[], card: false},{word: "عَـٰلَمِينَ", definition:['1.2 Plural','(introduce','common','singular-plural pairs','from the Qur’an)'], card: true}]
  const ayah3 = [{word:"ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", definition: [] , card: false}]
  const ayah4 = [{word:"مَـٰلِكِ", definition: [] , card: false},{word: "يَوْمِ", definition:[], card: true}, {word:"ٱلدِّينِ", definition: [] , card: false}]
  const ayah5 = [{word:"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", definition: [] , card: false}]
  const ayah6 = [{word: "ٱهْدِنَا", definition: [] , card: false},{word: "ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", definition:[], card: true}]
  const ayah7 = [{word:"بِ", definition: prepositions , card: true},{word: "سْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", definition:[], card: false}]

  const number1 = "(1)";
  const number2 = "(2)";
  const number3 = "(3)";
  const number4 = "(4)";
  const number5 = "(5)";
  const number6 = "(6)";
  const number7 = "(7)";
  return (
    <div className='flex flex-col items-center '>
    <h1 className='font-bold text-4xl text-center text-emerald-500'>The Quranic</h1>
    <Lines ayah={ayah1} number={number1}/>
    <Lines ayah={ayah2} number={number2}/>
    <Lines ayah={ayah3} number={number3}/>
    <Lines ayah={ayah4} number={number4}/>
    <Lines ayah={ayah5} number={number5}/>
    <Lines ayah={ayah6} number={number6}/>
    <Lines ayah={ayah7} number={number7}/>
    </div>
  )
}

export default App