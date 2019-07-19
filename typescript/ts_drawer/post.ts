'use strict'

enum PostStatus {
  Unpublished,
  Published,
  Draft
}
interface Post {
  title: string;
  status: PostStatus;
  content: string
}

let post: Post = {
  title: 'shangzhongye',
  status: PostStatus.Unpublished,
  content: '---------'
}