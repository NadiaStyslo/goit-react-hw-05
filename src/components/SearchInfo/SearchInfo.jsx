import toast from 'react-hot-toast';
import css from './SearchInfo.module.css';

const SearchInfo = ({ onSearch }) => {
  const handleSumbit = (evt) => {
    evt.preventDefault();

    if (evt.target.query.value.trim() === '') {
      toast.error('Enter movie name, please');
      return;
    }
    onSearch(evt.target.elements.query.value);
    console.log(onSearch);
    // evt.target.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSumbit}>
        <input
          className={css.input}
          type="text"
          name="query"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search movie"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchInfo;
