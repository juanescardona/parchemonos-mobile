import { Injectable } from '@angular/core';
import { IExperience } from '../shared/models/IExperience';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private experiences : Array<IExperience>= [
    {
      id: 1,
      image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg',
      title: 'Senderimo por Envigado',
      place: 'Envigado',
      price: '10,000',
      score: 3,
      users: 80
    },
    {
      id: 2,
      image: 'https://www.justcheckin.com.mx/wp-content/uploads/2018/10/escalada-actividad-aventura-turismo-aventuras-empresas-exploramas-1.jpg',
      title: 'Escala las montañas del oriente',
      place: 'San Carlos',
      price: '50,000',
      score: 4,
      users: 150
    },
    {
      id: 3,
      image: 'https://www.getvico.com/blog/wp-content/uploads/2018/01/viewpoints_medellin.jpg',
      title: 'Mirador de palmas',
      place: 'Medellín',
      price: '15,000',
      score: 2,
      users: 326
    },
    {
      id: 4,
      image: 'https://elpais.com/elpais/imagenes/2019/03/01/viajero_astuto/1551460921_336112_1551693736_noticia_grande.jpg',
      title: 'Kayak en corrientes rapidas',
      place: 'San Rafael',
      price: '60,000',
      score: 5,
      users: 99
    },
    {
      id: 5,
      image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg',
      title: 'Senderimo por Envigado',
      place: 'Envigado',
      price: '10,000',
      score: 3,
      users: 80
    },
    {
      id: 6,
      image: 'https://www.justcheckin.com.mx/wp-content/uploads/2018/10/escalada-actividad-aventura-turismo-aventuras-empresas-exploramas-1.jpg',
      title: 'Escala las montañas del oriente',
      place: 'San Carlos',
      price: '50,000',
      score: 4,
      users: 150
    },
    {
      id: 7,
      image: 'https://www.getvico.com/blog/wp-content/uploads/2018/01/viewpoints_medellin.jpg',
      title: 'Mirador de palmas',
      place: 'Medellín',
      price: '15,000',
      score: 2,
      users: 326
    },
    {
      id: 8,
      image: 'https://elpais.com/elpais/imagenes/2019/03/01/viajero_astuto/1551460921_336112_1551693736_noticia_grande.jpg',
      title: 'Kayak en corrientes rapidas',
      place: 'San Rafael',
      price: '60,000',
      score: 5,
      users: 99
    }
  ];

  constructor(private httpClient: HttpClient) { }

  public getAllLocal(): Array<IExperience>{
    return this.experiences;
  }

  public getFindByIdLocal(id: Number): IExperience{
    return this.experiences.find(el => el.id === id);
  }

  public getAllRemote(): Observable<any> {
    const url = `${environment.baseUrl}/experiences`;
    return this.httpClient.get(url);
  }
  
  public getFindByIdRemote(id: string): Observable<any>{
    const url = `${environment.baseUrl}/experiences/detail/${id}`;
    return this.httpClient.get(url);
  }
}
