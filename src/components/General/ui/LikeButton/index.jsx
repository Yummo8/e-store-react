import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleWishlist } from '../../../../redux/slices/wishlistSlice';
import { selectAuthData } from '../../../../redux/slices/authSlice';

import { Checkbox } from '@mui/material';
import { FavoriteFilled } from '../../../../assets/img/general';
import { routes } from '../../../../utils/routes';

export const LikeButton = ({ id, inWishlist }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector(selectAuthData);

  const onLikeBtnToggle = () => {
    if (!isAuth) {
      return navigate(routes.signIn, { replace: true });
    }

    dispatch(toggleWishlist(id));
  };

  return (
    <div className={inWishlist ? 'item__action checked' : 'item__action'}>
      <Checkbox
        icon={<FavoriteFilled color="" />}
        checkedIcon={<FavoriteFilled color="#FF0000" />}
        checked={inWishlist}
        onChange={onLikeBtnToggle}
      />
    </div>
  );
};
