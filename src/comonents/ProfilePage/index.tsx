import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outline>Editar perfil</EditButton>

          <h1>Caio Lacerda</h1>
          <h2>@caioplacerda</h2>


          <p>
            Developer at <a href='https://www.totvs.com'>@Totvs</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              Goiania, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido em 30 de abril de 2008
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong> 87</strong>
            </span>
            <span>
              <strong>65 </strong> seguidores
            </span>
          </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;