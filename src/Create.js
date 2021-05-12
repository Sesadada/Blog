import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Serena');
	const [pending, setPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setPending(true);
		const blog = {
			title,
			body,
			author,
		};
		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log('new blog added');
			setPending(false);
			history.push('/');
		});
	};
	return (
		<div className='create'>
			<h2>Write a new article</h2>
			<form onSubmit={handleSubmit}>
				<label> Article Title</label>
				<input
					type='text'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label> Article Body</label>
				<textarea
					type='text'
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<label> Article Author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value='Serena'>Serena</option>
					<option value='Andres'>Andrés</option>
				</select>
				{!pending && <button>Add Article</button>}
				{pending && <button disabled>Adding</button>}
			</form>
		</div>
	);
};

export default Create;
