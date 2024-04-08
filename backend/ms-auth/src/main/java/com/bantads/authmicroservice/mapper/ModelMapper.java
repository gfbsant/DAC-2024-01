package com.bantads.authmicroservice.mapper;

import com.bantads.authmicroservice.dto.UserDTO;
import com.bantads.authmicroservice.model.User;

import java.util.ArrayList;
import java.util.List;

public class ModelMapper {

    private static final org.modelmapper.ModelMapper mapper = new org.modelmapper.ModelMapper();

    static {
        mapper.createTypeMap(User.class, UserDTO.class).addMapping(User::
                getId, UserDTO::setId);

        mapper.createTypeMap(UserDTO.class, User.class).
                addMapping(UserDTO::
                        getId, User::setId);
    }

    public static <O, D> D parseObject(O origin, Class<D> destination) {
        return mapper.map(origin, destination);
    }

    public static <O, D> List<D> parseListObjects(List<O> origin, Class<D> destination) {
        List<D> destinationObjects = new ArrayList<D>();

        for (O o : origin) {
            destinationObjects.add(mapper.map(o, destination));
        }
        return destinationObjects;
    }

}
