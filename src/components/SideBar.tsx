import { GenreResponseProps } from "../App";
import { Button } from './Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[];
  handleClickButton(id: number): void;
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}