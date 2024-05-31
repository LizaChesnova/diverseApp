

export const getData = async (url) => {
    const response = await fetch(url,
        {
            method: 'GET',
        })
    if (response.status !== 200) {
        throw new Error('Ошибка получения данных')
    }
    const data = await response.json()
    return data;
}

export const getPlaceByID = (data, id) => {
    return data.find((item) => item.id === Number(id));

}

export const getUserPlaceByID = (url1, userdata) => {
    return getData(url1).then(result => {
        return result.places.filter((place) => {
            return userdata.events.includes(place.id);
        });
    });
};





export const addNewPlace = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (response.status !== 200) {
        throw new Error("Ошибка добавления места");
    }
    const result = await response.json();
    return result;

};
export const AddTeam = async (url, data) => {
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (response.status !== 200) {
        throw new Error("Ошибка записи");
    }
    const result = await response.json();
    return result;

};
export const signUpOnEvent = async (url, data) => {
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (response.status !== 200) {
        throw new Error("Ошибка записи");
    }
    const result = await response.json();
    return result;

};

export const editProfile = async (url, data) => {
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (response.status !== 200) {
        throw new Error("Ошибка записи");
    }
    const result = await response.json();
    return result;

}
export const isResponseOk = (response) => {
    if (response === false) {
        return false
    }
    else {
        return true
    }
};
export const authorize = async (url, email, hashedPassword) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        if (response.status !== 200) {
            throw new Error("Ошибка авторизации");
        }
        const result = await response.json();
        const user = result.users.find((item) => item.email === email);
        if (user) {
            if (user.password === hashedPassword) {
                return user;
            } else {
                return false;
            }
        }
    } catch (error) {
        return error;
    }
};
export const checkIfUserExists = async (url, userEmail) => {
    try {
      const data = await getData(url);
      return data.users.some((item) => item.email === userEmail);
    } catch (error) {
      console.error('Error checking if user exists:', error);
      return false;
    }
  };

export const register = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const result = await response.json();

        if (response.status === 200) {
            return { success: true, jwt: result.user.jwt };
        } else {
            return { success: false, error: result.error };
        }

    } catch (error) {
        console.error('Error during registration:', error);
        return { success: false, error: "Произошла ошибка при регистрации" };
    }
};
export const getMe = async (url, jwt) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { Authorization: `Bearer ${jwt}` },
        });
        if (response.status !== 200) {
            throw new Error("Ошибка получения данных");
        }
        const result = await response.json();
        const user = result.users.find((item) => item.jwt === jwt);
        return user;

    } catch (error) {
        return error;
    }
};
export const setJWT = (jwt) => {
    localStorage.setItem("jwt", jwt);
};

export const getJWT = () => {
    return localStorage.getItem("jwt");
};

export const removeJWT = () => {
    localStorage.removeItem("jwt");
};
export const deletArticl = (url) =>{
    fetch(url, {
        method: 'DELETE',
      })
}
