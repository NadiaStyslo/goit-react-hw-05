import toast from 'react-hot-toast';

const SearchInfo = ({ onSearch }) => {
  const handleSumbit = (evt) => {
    evt.preventDefault();

    if (evt.target.elements.query.value.trim() === '') {
      toast.error('EMPTY STRING!');
      return;
    }
    onSearch(evt.target.elements.query.value);
    console.log(onSearch);
    // evt.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="query"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchInfo;
