import * as api from '../api/index';

export const signup = (userData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(userData);
    dispatch({ type: 'AUTH', data });

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
export const signupserviceprovider =
  (userData, history) => async (dispatch) => {
    try {
      const { data } = await api.signupserviceprovider(userData);

      dispatch({ type: 'AUTHSERVICE', data });
      history.push('/freelancerinfo');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

export const loginhirer = (loginData, history) => async (dispatch) => {
  try {
    const { data } = await api.loginhirer(loginData);
    dispatch({ type: 'AUTH', data });
    history.push('/');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const loginservicer = (loginData, history) => async (dispatch) => {
  try {
    const { data } = await api.loginservicer(loginData);
    dispatch({ type: 'AUTH', data });
    history.push('/portfoliopage');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const freelancerinfo =
  (freelancerData, history, freelancerId) => async (dispatch) => {
    try {
      const { data } = await api.freelancerinfo(freelancerData, freelancerId);
      localStorage.setItem('profile', JSON.stringify(data));
      history.push('/otherinfo');
    } catch (error) {
      console.log(error);
    }
  };

export const otherfreelancerinfo =
  (freelancerData, history, freelancerId) => async (dispatch) => {
    try {
      const { data } = await api.otherfreelancerinfo(
        freelancerData,
        freelancerId
      );
      localStorage.setItem('profile', JSON.stringify(data));
      history.push('/portfoliopage');
    } catch (error) {
      console.log(error);
    }
  };

export const updatefreelancerinfo =
  (freelancerData, history, freelancerId) => async (dispatch) => {
    try {
      const { data } = await api.freelancerinfo(freelancerData, freelancerId);
      localStorage.clear();
      localStorage.setItem('profile', JSON.stringify(data));
      history.push('/portfoliopage');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

export const updatehirerinfo =
  (hirerData, history, hirerId) => async (dispatch) => {
    try {
      const { data } = await api.updatehirerinfo(hirerData, hirerId);
      localStorage.clear();
      localStorage.setItem('profile', JSON.stringify(data));
      history.push('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
export const feedback = (feedbackData) => async (dispatch) => {
  try {
    const { data } = await api.feedback(feedbackData);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const updatebrandpics =
  (freelancerData, history, freelancerId) => async (dispatch) => {
    try {
      const { data } = await api.updatebrandpics(freelancerData, freelancerId);
      localStorage.clear();
      localStorage.setItem('profile', JSON.stringify(data));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

export const updatestartingprice =
  (startingPrice, history, freelancerId) => async (dispatch) => {
    try {
      const { data } = await api.updatestartingprice(
        startingPrice,
        freelancerId
      );
      localStorage.clear();
      localStorage.setItem('profile', JSON.stringify(data));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
