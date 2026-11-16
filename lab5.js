import React, { useState } from 'react';
export default function MovieWatchList() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Whiplash', review: 'great movie 10/10', rating: 5 }
  ]);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const addMovie = (e) => {
    e.preventDefault(); 
    if (!title) return;
    const newMovie = {
      id: Date.now(),
      title: title,
      review: review || 'No review written.',
      rating: Number(rating)
    };
    setMovies([newMovie, ...movies]); 
    setTitle('');
    setReview('');
    setRating(5);
  };
  const deleteMovie = (id) => {
    const updatedList = movies.filter((movie) => movie.id !== id);
    setMovies(updatedList);
  };
  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>movie watch list</h1>
      <form onSubmit={addMovie} style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Add a Watched Movie</h3>
        <div style={{ marginBottom: '10px' }}>
          <label>Movie Title:</label><br />
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="e.g. Avatar" 
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Review / Comments:</label><br />
          <textarea 
            value={review} 
            onChange={(e) => setReview(e.target.value)} 
            placeholder="What did you think?" 
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Rating (1 to 5):</label><br />
          <select 
            value={rating} 
            onChange={(e) => setRating(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          >
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <button type="submit" style={{ background: 'blue', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer', width: '100%' }}>
          Add Movie
        </button>
      </form>
      <h2>My Watch List ({movies.length})</h2>
      {movies.length === 0 ? (
        <p style={{ color: 'gray' }}>No movies added yet.</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} style={{ background: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>{movie.title}</h3>
              <button 
                onClick={() => deleteMovie(movie.id)}
                style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}
              >
                Delete
              </button>
            </div>
            <p style={{ margin: '5px 0', fontSize: '16px' }}>
              {'⭐'.repeat(movie.rating)} ({movie.rating}/5)
            </p>
            <p style={{ margin: '5px 0', fontStyle: 'italic', color: '#555' }}>
              "{movie.review}"
            </p>
          </div>
        ))
      )}
    </div>
  );
}
