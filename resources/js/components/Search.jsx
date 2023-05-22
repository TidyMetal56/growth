import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Search({ onSearch }) {
  const [keywords, setKeywords] = useState('');

  const handleSearch = () => {
    onSearch(keywords);
  };

  return (
    <Form className="d-flex mb-3">
      <Form.Control
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search"
      />
      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
}

export default Search;
