
import Lines from './Lines'

const App = () => {
  const prepositions = ['1.1 Prepositions-I Bi – with Li – for ‘Ala – on Min – from Ila – to Fi - in'];
  const person = ['1.5 Person ‘Alaikhim – on them ‘alaihi – on him ‘alaiha – on her ‘alaiyi – on me ‘alaina – on us ‘Alaika – on you']
  const ayah1 = [{word:"بِ", definition: prepositions , card: true},{word: "سْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", definition:[], card: false}]
  const ayah2 = [{word: "ٱلْ", definition:prepositions, card: true},{word: "حَمْدُ", definition:[], card: false},{word: "لِ", definition:prepositions, card: true},{word: "لِلَّهِ رَبِّ ٱلْ", definition:[], card: false},{word: "عَـٰلَمِينَ", definition:['1.2 Plural (introduce common singular-plural pairs from the Qur’an)'], card: true}]
  const ayah3 = [{word:"ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", definition: [] , card: false}]
  const ayah4 = [{word:"مَـٰلِكِ", definition: [] , card: false},{word: "يَوْمِ", definition:['1.3  Time/period  Yawm – day (481)  Sa’ah – hour (48)  Shahr – month (11)  Nahar – daytime  Night – layl (~90)'], card: true}, {word:"ٱلدِّينِ", definition: [] , card: false}]
  const ayah5 = [{word:"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", definition: [] , card: false}]
  const ayah6 = [{word: "ٱهْدِنَا", definition: [] , card: false},{word: "ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", definition:['1.4 Adjectives (introduce common adjective-noun pairs from the Qur’an) https://quickestwaytoquran.blogspot.com/2017/02/quranic-syntax-noun-adjective.html'], card: true}]
  const ayah7 = [{word:"صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ", definition: [] , card: false},{word: " عَلَيْهِمْ", definition:person, card: true},{word: "غَيْرِ ٱلْمَغْضُوبِ", definition:[], card: false},{word: " عَلَيْهِمْ", definition:person, card: true},{word: "وَلَا ٱلضَّآلِّينَ", definition:[], card: false}]
 

  const number1 = "(1)";
  const number2 = "(2)";
  const number3 = "(3)";
  const number4 = "(4)";
  const number5 = "(5)";
  const number6 = "(6)";
  const number7 = "(7)";
  return (
    <div className='flex flex-col items-center h-96'>
    <h1 className='ml-12 font-bold text-4xl text-center text-emerald-500'>The Quranic</h1>
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