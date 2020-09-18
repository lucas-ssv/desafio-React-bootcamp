import React, { Component } from 'react';

import PostItem from '../PostItem';

import './styles.css';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Julio Alcantara",
                    avatar: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=150&w=150&q=80"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=150&w=150&q=80"
                        },
                        content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: "Gabriel Lisboa",
                    avatar: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=150&w=150&q=80"
                },
                date: "04 Jun 2019",
                content: "Fala galera, beleza? Estou fazendo o bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.",
                comments: [
                    {
                        id: 2,
                        author: {
                            name: "Clara Lisboa",
                            avatar: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=150&w=150&q=80"
                        },
                        content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API nos desafios construída"
                    },
                    {
                        id: 3,
                        author: {
                            name: "Cézar Toledo",
                            avatar: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=150&w=150&q=80"
                        },
                        content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
                    }
                ]
            },
            {
                id: 3,
                author: {
                    name: "Gabriel Lisboa",
                    avatar: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=150&w=150&q=80"
                },
                date: "04 Jun 2019",
                content: "Fala galera, beleza? Estou fazendo o bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.",
                comments: [
                    {
                        id: 2,
                        author: {
                            name: "Clara Lisboa",
                            avatar: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=150&w=150&q=80"
                        },
                        content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API nos desafios construída"
                    },
                    {
                        id: 3,
                        author: {
                            name: "Cézar Toledo",
                            avatar: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=150&w=150&q=80"
                        },
                        content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
                    }
                ]
            },
        ]
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="postlist">
                {posts.map(post => (
                    <PostItem key={post.id} {...post} />
                ))}
            </div>
        );
    }
}

export default PostList;