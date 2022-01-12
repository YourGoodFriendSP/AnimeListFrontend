import React from 'react'
import Togglable from './Togglable'
import Notification from './Notification'

import { useDispatch, useSelector } from 'react-redux'
import { createNewAnime } from '../reducers/animeReducer'
import { showNotification } from '../reducers/notificationReducer'

import { List, ListItem, Divider } from '@mui/material'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import mainPage from '../assests/img/japan.png'

const AnimeApp = () => {

  const dispatch=useDispatch()
  const animes=useSelector(state => state.animes)
  const notifyWith =(message,type='success') => {
    dispatch(showNotification(message,type))
  }

  const createAnime=(animeObject) => {
    dispatch(createNewAnime(animeObject))
    notifyWith(`${animeObject.title} is created`)
  }

  return (
    <div>
      <h4>Animes</h4>
      <Notification />
      <Togglable createAnime={createAnime} />
      <Row>
        <Col>
          <div style={{ marginTop:'20px',justifyContent:'center' }} >
            <List disablePadding>
              {
                animes.map(anime =>
                  <div key={anime.id}>
                    <ListItem>
                      <Link to={`/animes/${anime.id}`}>{anime.title}</Link>
                    </ListItem>
                    <Divider />
                  </div>
                )
              }
            </List>
          </div>
        </Col>
        <Col>
          <div style={{ marginTop:'20px',justifyContent:'center',alignContent:'center',marginLeft:'80px' }} ><img src={mainPage} width='300' height='200' /></div>
        </Col>
      </Row>
    </div>
  )
}

export default AnimeApp