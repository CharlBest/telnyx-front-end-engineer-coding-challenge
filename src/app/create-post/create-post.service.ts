import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Post } from '../shared/models/post.model';

@Injectable()
export class CreatePostService {

    constructor(private http: HttpClient) { }


    public createPost(post: Post): Observable<Post> {
        return this.http.post<Post>(`${environment.apiUrl}/posts`, post);
    }
}
