export const getComments = async () => {
    return [
      {
        id: "1",
        body: "I love these games! Do you want to get together to game sometime soon? I'm located in the area.",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2021-10-16",
      },
      {
        id: "2",
        body: "We should play online sometime! Send me a message.",
        username: "Stacy",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-24",
      },
      // {
      //   id: "3",
      //   body: "First comment first child",
      //   username: "John",
      //   userId: "2",
      //   parentId: "1",
      //   createdAt: "2021-08-16T23:00:33.010+02:00",
      // },
      // {
      //   id: "4",
      //   body: "Second comment second child",
      //   username: "John",
      //   userId: "2",
      //   parentId: "2",
      //   createdAt: "2021-08-16T23:00:33.010+02:00",
      // },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "John",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };