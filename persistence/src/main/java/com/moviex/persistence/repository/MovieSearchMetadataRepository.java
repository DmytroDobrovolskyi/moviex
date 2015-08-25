package com.moviex.persistence.repository;

import com.moviex.persistence.entity.movie.MovieSearchMetadata;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Set;

@RepositoryRestResource(collectionResourceRel = "search-metadata", path = "search-metadata")
public interface MovieSearchMetadataRepository extends CrudRepository<MovieSearchMetadata, String> {

    Set<MovieSearchMetadata> findByTitleContainingIgnoreCase(String title);
}