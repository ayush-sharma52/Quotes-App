const QUOTES_API_DOMAIN = 'https://quotes-app-api-kvzz.onrender.com';

export async function getAllQuotes() {
  const response = await fetch(`${QUOTES_API_DOMAIN}/quotes`);
  const data = await response.json();

  if (response.status.code===500) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  // quote:{
  //   author:"",
  //   text:"",
  //   _id:
  // }

  const transformedQuotes = [];

  
  data.forEach(quote => {
    transformedQuotes.push({
      ...quote,
      id:quote._id
    })
  });
  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${QUOTES_API_DOMAIN}/quotes/${quoteId}`);
  const data = await response.json();

  if (response.status.code===500) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: data._id,
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${QUOTES_API_DOMAIN}/quotes`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (response.status.code===500) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${QUOTES_API_DOMAIN}/quotes/${requestData.quoteId}/comments`, {
    method: 'POST',
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (response.status.code===500) {
    throw new Error(data.message || 'Could not add a comment');
  }

  return data.author ;
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${QUOTES_API_DOMAIN}/quotes/${quoteId}/comments`);
  const data = await response.json();
  if (response.status.code===500) {
    throw new Error(data.message || 'Could not get comments');
  }
  const transformedComments = [];

  data.forEach(comment=>{
   transformedComments.push({
     text:comment.commentData,
     id:comment._id
   }) });
   console.log(transformedComments);
  return transformedComments;
 
}


