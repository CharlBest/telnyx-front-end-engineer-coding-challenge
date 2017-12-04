import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Post } from '../shared/models/post.model';
import { Comment } from '../shared/models/comment.model';

@Injectable()
export class FeedService {

    constructor(private http: HttpClient) { }

    private sortPostsByDate(a, b) {
        return new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime();
    }

    private sortCommentsByDate(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    public getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`)
            .pipe(
            map(x => x.sort(this.sortPostsByDate))
            );
    }

    public getPost(id: number): Observable<Post> {
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`)
            .pipe(
            map(x => x.find(y => y.id === id))
            );
    }

    public getPostComments(id: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${environment.apiUrl}/comments`)
            .pipe(
            map(x => x.filter(y => y.postId === id)),
            map(x => x.sort(this.sortCommentsByDate)),
            map(x => {
                for (const comment of x) {
                    comment['replies'] = x.filter(y => y.parent_id === comment.id);
                }
                return x;
            }),
            map(x => x.filter(y => y.parent_id === null))
            );
    }

    public createPostComment(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(`${environment.apiUrl}/comments`, comment);
    }
}
